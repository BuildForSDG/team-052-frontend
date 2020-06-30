import { RouteComponentProps } from 'react-router-dom';
// export interface ReportsProps  {
//   name: string;
//   numberType?: number;
//   report: {
//     name: string;
//     description: string;
//     location: string;
//   };
// }
export interface ReportProps extends RouteComponentProps<any> {
  /* other props  */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  report?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  one?: any
}
