export function withContext(Component, ContextValue, namedContext) {
  return function WrappedComponent(props) {
    return (
      <ContextValue.Consumer>
        {(state) => {
          const newContext = { [namedContext]: { ...state }, ...props.context };
          return <Component {...props} context={newContext} />;
        }}
      </ContextValue.Consumer>
    );
  };
}

export default withContext;
