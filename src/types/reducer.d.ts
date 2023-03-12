declare interface GenericAction<T extends string = '', P = unknown> {
  type: T;
  payload: P;
}
