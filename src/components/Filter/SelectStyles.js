export const makeStyles = (style) => ({
  //
  container: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#fffffff",
    justifyContent: "center",
    alignSelf: "flex-start",
    ...style?.container,
  }),

  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: "#F7F7FB",

    color: "#121417",
    fontSize: 18,
    fontWeight: 500,
    lineHeight: "1.11",
    borderRadius: "14px",
    width: "100%",
    cursor: state.selectProps.isSearchable ? "text" : "pointer",
    display: "flex",
    gap: 8,
    padding: "14px 18px",
    ...style?.control,
  }),

  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: "#121417",
    width: "100%",
    ...style?.singleValue,
  }),

  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    color: "#121417",
    transition: "transform 200ms ease-out",
    transform: state.selectProps.menuIsOpen ? "rotate(0.5turn)" : "unset",
    cursor: "pointer",
    ...style?.dropdownIndicator,
  }),

  input: (baseStyles) => ({
    ...baseStyles,
    color: "rgba(18, 20, 23, 0.2)",
    padding: 0,
    ...style?.input,
  }),

  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "white",
    marginTop: 4,
    width: "100%",

    border: "1px solid rgba(18, 20, 23, 0.05)",
    borderRadius: "14px",
    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
    padding: "14px 8px 14px 18px",

    ...style?.menu,
  }),

  menuList: (baseStyles) => ({
    ...baseStyles,
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    backgroundColor: "#ffffff",
    ...style?.menuList,
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    color: state.isFocused ? "rgba(18, 20, 23, 1)" : "rgba(18, 20, 23, 0.2)",
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "1.25",
    whiteSpace: "nowrap",
    ...style?.option,
  }),

  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "black",
    fontSize: 18,
    fontWeight: 500,
    lineHeight: "111.111%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),

  valueContainer: (baseStyles) => ({
    ...baseStyles,
  }),
});
