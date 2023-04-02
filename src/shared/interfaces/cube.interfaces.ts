import { GenericKeyStringObject } from './app-wide.interfaces';

export interface CubeStatePropsI {
  data: CubePositionsI;
}

export interface CubePositionsI {
  CubePositions: GenericKeyStringObject<CubePositionI>;
}

export interface CubePositionI {
  posX: number;
  posY: number;
  axes: string[];
}

export interface CubeColorsI {
  top: string;
  left: string;
  front: string;
  right: string;
  bot: string;
  back: string;
}
