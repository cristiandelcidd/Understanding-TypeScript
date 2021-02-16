// Project Type
enum ProjectStatus { Active, Finished }
class Project {
   constructor (
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public status: ProjectStatus
   ) {}
}

// Project State Management
type Listener = ( items: Project[] ) => void;

class ProjectState {
   private listeners: Listener[] = [];
   private projects: Project[] = [];
   private static instance: ProjectState;

   private constructor () {}

   static getInstance () {
      if ( this.instance ) {
         return this.instance;
      }
      this.instance = new ProjectState();
      return this.instance;
   }

   addListener ( listenerFn: Listener ) {
      this.listeners.push( listenerFn );
   }

   addProject ( title: string, description: string, numOfPeople: number ) {
      const newProject = new Project( Math.random().toString(), title, description, numOfPeople, ProjectStatus.Active )
      this.projects.push( newProject );
      for ( const listenerFn of this.listeners ) {
         listenerFn( this.projects.slice() );
      }
   }
}

const projectState = ProjectState.getInstance();

// Validation
interface Validatable {
   value: string | number;
   required?: boolean;
   minLenght?: number;
   maxLenght?: number;
   min?: number;
   max?: number;
}

function validate ( validatableInput: Validatable ) {
   let isValid = true;
   if ( validatableInput.required ) {
      isValid = isValid && validatableInput.value.toString().trim().length !== 0
   }
   if ( validatableInput.minLenght != null && typeof validatableInput.value === 'string' ) {
      isValid = isValid && validatableInput.value.length >= validatableInput.minLenght;
   }
   if ( validatableInput.maxLenght != null && typeof validatableInput.value === 'string' ) {
      isValid = isValid && validatableInput.value.length <= validatableInput.maxLenght;
   }
   if ( validatableInput.min != null && typeof validatableInput.value === 'number' ) {
      isValid = isValid && validatableInput.value >= validatableInput.min;
   }
   if ( validatableInput.max != null && typeof validatableInput.value === 'number' ) {
      isValid = isValid && validatableInput.value <= validatableInput.max;
   }
   return isValid;
}

// Autobind decorator
function autobind ( _: any, __: string, descriptor: PropertyDescriptor ) {
   const originalMethod = descriptor.value;
   const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get () {
         const boundFn = originalMethod.bind( this );
         return boundFn;
      }
   }
   return adjDescriptor;
}

class ProjectList {
   templateElement: HTMLTemplateElement;
   hostElement: HTMLDivElement;
   element: HTMLElement;
   assignedProjects: Project[];

   constructor ( private type: 'active' | 'finished' ) {
      this.templateElement = < HTMLTemplateElement >document.getElementById( 'project-list' )!;
      this.hostElement = < HTMLDivElement >document.getElementById( 'app' )!;
      this.assignedProjects = [];

      const importedNode = document.importNode( this.templateElement.content, true );
      this.element = < HTMLElement >importedNode.firstElementChild;
      this.element.id = `${ this.type }-projects`;

      projectState.addListener( ( projects: Project[] ) => {
         const relevantProjects = projects.filter( prj => {
            if ( this.type === 'active' ) {
               return prj.status === ProjectStatus.Active;
            }
            return prj.status === ProjectStatus.Finished;
         });
         this.assignedProjects = relevantProjects;
         this.renderProjects();
      });

      this.attach();
      this.renderContent();
   }

   private renderProjects () {
      const listEl = < HTMLUListElement >document.getElementById( `${ this.type }-projects-list` );
      listEl.innerHTML = '';
      for ( const prjItem of this.assignedProjects ) {
         const listItem = document.createElement( 'li' )
         listItem.textContent = prjItem.title;
         listEl.appendChild( listItem );
      }
   }

   private renderContent () {
      const listId = `${ this.type }-projects-list`;
      this.element.querySelector( 'ul' )!.id = listId;
      this.element.querySelector( 'h2' )!.textContent = this.type.toUpperCase() + ' PROJECTS';
   }

   private attach () {
      this.hostElement.insertAdjacentElement( 'beforeend', this.element );
   }
}

class ProjectInput {
   templateElement: HTMLTemplateElement;
   hostElement: HTMLDivElement;
   element: HTMLFormElement;
   titleInputElement: HTMLInputElement;
   descriptionInputElement: HTMLInputElement;
   peopleInputElement: HTMLInputElement;

   constructor () {
      this.templateElement = < HTMLTemplateElement >document.getElementById( 'project-input' )!;
      this.hostElement = < HTMLDivElement >document.getElementById( 'app' )!;

      const importedNode = document.importNode( this.templateElement.content, true );
      this.element = < HTMLFormElement >importedNode.firstElementChild;
      this.element.id = 'user-input';

      this.titleInputElement = < HTMLInputElement >this.element.querySelector( '#title' )!;
      this.descriptionInputElement = < HTMLInputElement >this.element.querySelector( '#description' )!;
      this.peopleInputElement = < HTMLInputElement >this.element.querySelector( '#people' )!;

      this.configure();
      this.attach();
   }

   private gatherUserInput (): [ string, string, number ] | void {
      const enteredTitle = this.titleInputElement.value;
      const enteredDescription = this.descriptionInputElement.value;
      const enteredPeople = this.peopleInputElement.value;

      const titleValidatable: Validatable = {
         value: enteredTitle,
         required: true,
      };

      const descriptionValidatable: Validatable = {
         value: enteredDescription,
         required: true,
         minLenght: 5
      };

      const peopleValidatable: Validatable = {
         value: +enteredPeople,
         required: true,
         min: 1,
         max: 5
      };

      if ( !validate( titleValidatable ) || !validate( descriptionValidatable ) || !validate( peopleValidatable ) ) {
         alert( 'All fields are required' );
         return;
      } else {
         return [ enteredTitle, enteredDescription, +enteredPeople ];
      }
   }

   private clearInputs () {
      this.titleInputElement.value = '';
      this.descriptionInputElement.value = '';
      this.peopleInputElement.value = '';
   }

   @autobind
   private submitHandler ( event: Event ) {
      event.preventDefault();
      const userInput = this.gatherUserInput();

      if ( Array.isArray( userInput ) ) {
         const [ title, description, people ] = userInput;
         projectState.addProject( title, description, people );
         this.clearInputs();
      }
   }

   private configure () {
      this.element.addEventListener( 'submit', this.submitHandler );
   }

   private attach () {
      this.hostElement.insertAdjacentElement( 'afterbegin', this.element );
   }
}

const prjInput = new ProjectInput();
const activePrjList = new ProjectList( 'active' );
const finishedPrjList = new ProjectList( 'finished' );