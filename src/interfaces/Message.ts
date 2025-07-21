import { SearchInfo } from "./"
export interface Message{
    id:number;
    content:string;
    isUser:boolean;
    type:string;
    isLoading?:boolean;
    searchInfo?: SearchInfo

}