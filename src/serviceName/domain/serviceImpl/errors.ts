import { ErrorBase } from "../../../utils/errors/errors";

type ErrorName = 
    | 'GET_PROJECT_ERROR'
    | 'CREATE_PROJECT_ERROR'
    | 'PROJECT_LIMIT_REACHED'
    | 'UPDATE_PROJECT_ERROR'

export class TeamError extends ErrorBase<ErrorName> {}