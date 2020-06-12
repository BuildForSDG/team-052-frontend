import { RouteComponentProps } from 'react-router-dom';
export interface NavigationProps extends RouteComponentProps<never> {
  /* other props  */
  variantColor?: string;
  backgroundColor?: string;
}
// export type NavigationProps = RouteComponentProps<any>;
