﻿
declare namespace Serenity {
    interface ServiceResponse {
        Error?: ServiceError;
    }

    interface ServiceRequest {
    }

    interface SaveRequest<TEntity> extends ServiceRequest {
        EntityId?: any;
        Entity?: TEntity;
        Localizations?: any;
    }

    interface SaveRequestWithAttachment<TEntity> extends SaveRequest<TEntity> {
        Attachments?: any[];
    }

    interface SaveResponse extends ServiceResponse {
        EntityId?: any;
    }

    interface SaveWithLocalizationRequest<TEntity> extends SaveRequest<TEntity> {
        Localizations?: { [key: string]: TEntity };
    }

    interface DeleteRequest extends ServiceRequest {
        EntityId?: any;
    }

    interface DeleteResponse extends ServiceResponse {
    }

    interface UndeleteRequest extends ServiceRequest {
        EntityId?: any;
    }

    interface UndeleteResponse extends ServiceResponse {
    }

    interface ListRequest extends ServiceRequest {
        Skip?: number;
        Take?: number;
        Sort?: string[];
        ContainsText?: string;
        ContainsField?: string;
        Criteria?: any[];
        EqualityFilter?: any;
        IncludeDeleted?: boolean;
        ExcludeTotalCount?: boolean;
        ColumnSelection?: ColumnSelection;
        IncludeColumns?: string[];
        ExcludeColumns?: string[];
        DistinctFields?: string[];
    }

    interface ListResponse<TEntity> extends ServiceResponse {
        Entities?: TEntity[];
        Values?: any[];
        TotalCount?: number;
        Skip?: number;
        Take?: number;
    }

    interface RetrieveRequest extends ServiceRequest {
        EntityId?: any;
        ColumnSelection?: RetrieveColumnSelection;
        IncludeColumns?: string[];
        ExcludeColumns?: string[];
    }

    interface RetrieveResponse<TEntity> extends ServiceResponse {
        Entity?: TEntity;
    }

    interface RetrieveLocalizationRequest extends RetrieveRequest {
    }

    interface RetrieveLocalizationResponse<TEntity> extends ServiceResponse {
        Entities?: { [key: string]: TEntity };
    }
}

