export interface AsideMenuItem{
  title: string;
  translate?: string;
  type: 'PAGE' | 'TAB' | 'ROOT';
  url: string;
  svg?: string;
  subs?: AsideMenuItem[];
  roles: string[]
}