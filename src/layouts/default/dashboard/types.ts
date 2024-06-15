type NavigationChildrenChildType = {
  name: string,
  routeName: string
}
export interface NavigationTypes {
    name: String,
    icon: String,
    routeName: String,
    section: String, 
    children?: NavigationChildrenChildType[]
  }