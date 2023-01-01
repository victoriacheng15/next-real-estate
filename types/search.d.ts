export type SearchProperties = Record<string, PropertyProps[]>

type QueryParameter = Record<string, string>;

export type Query = {
	query: QueryParameter;
};
