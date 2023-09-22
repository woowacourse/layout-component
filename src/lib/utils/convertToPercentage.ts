import { Slash } from '../@types';

const convertToPercentage = (value: Slash) => `${Number(value) * 100}%`;

export default convertToPercentage;
