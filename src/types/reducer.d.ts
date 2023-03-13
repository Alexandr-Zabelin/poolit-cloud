declare interface GenericAction<T extends string = '', P = unknown> {
  type: T;
  payload: P;
}

declare interface GenericData<T extends string = '', D = unknown> {
  type: T;
  data: D;
}
