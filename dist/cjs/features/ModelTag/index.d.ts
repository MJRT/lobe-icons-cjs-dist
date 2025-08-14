/// <reference types="react" />
import { TagProps } from './Tag';
export interface ModelTagProps extends Omit<TagProps, 'icon' | 'children'> {
    model: string;
    type?: 'color' | 'mono';
}
declare const ModelTag: import("react").NamedExoticComponent<ModelTagProps>;
export default ModelTag;
