import IUserFormContent from "./FormContent";




interface IUserProject {
  id: string;
  projectName?: string|null
  projectType?: string|null
  timeCreated: Date;
  formName?: string|null
  formtype?: string|null
  description?:string|null
  notes?: string|null
  totalPrice?: number | null
  timeDue?: Date| null
  projectQuote?: string |null
  projectQuoteTotal?:number | null
  projectRecipient?: string| null
  projectAccepted?: boolean | null
  
  userFormContent?: IUserFormContent[];
  
}
export default IUserProject;
