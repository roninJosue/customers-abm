export const setPropsAsInitial = WrappedComponent => {
  return function (props) {
    return(
      <WrappedComponent
        {...props}
        initialValues={props}
        enableReinitialize
      />
    )
  }
}