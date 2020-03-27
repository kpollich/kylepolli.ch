// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      blue: string;
      lightgrey: string;
      darkgrey: string;
    };
  }
}
