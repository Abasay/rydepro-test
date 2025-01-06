const reducer = (state: any[], action: { type: any; id: any; sub_id: any }) => {
  switch (action.type) {
    case 'toggle_click':
      // Toggle isClicked for the main item based on action.id and set the first subTitle's isClicked to true
      return state.map((item) =>
        item.id === action.id
          ? {
              ...item,
              isClicked: item.isClicked ? true : !item.isClicked,
              subTitle: item.subTitle.map((subItem: any, index: number) =>
                index === 0
                  ? { ...subItem, isClicked: true }
                  : { ...subItem, isClicked: false }
              ),
            }
          : { ...item, isClicked: false }
      );

    case 'handle_option':
      // Toggle isClicked for the subItem based on action.sub_id
      return state.map((item) => ({
        ...item,
        subTitle: item.subTitle.map((subItem: { sub_id: any }) =>
          subItem.sub_id === action.sub_id && item.id === action.id
            ? { ...subItem, isClicked: true }
            : { ...subItem, isClicked: false }
        ),
      }));

    default:
      return state;
  }
};

export default reducer;
