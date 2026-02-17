export interface Project {
  title: string;
  description: string;
  stack?: string[] | undefined;
  gitHub?: string | undefined;
  colab?: string | undefined;
  link?: string | undefined;
  router?: string | undefined;
}
