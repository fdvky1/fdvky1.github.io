declare module "vue-highlight-code" {
    import { DefineComponent } from "vue";
  
    interface HighCodeProps {
      textEditor?: boolean;
      copy?: boolean;
      codeLines?: boolean;
      langName?: string;
      codeValue: string;
      borderRadius?: string;
      theme?: "dark"|"light";
      lang?: string;
      width?: string;
      height?: string;
    }
  
    const HighCode: DefineComponent<HighCodeProps>;
  
    export { HighCode };
  }
  