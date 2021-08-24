export const PICKLES = "PICKLES";
export const HOTDOG = "HOTDOG";

export function setPickles(payload: string) {
  return {
    type: PICKLES,
    payload,
  };
}

export function setHotDog(payload: string) {
  return {
    type: HOTDOG,
    payload,
  };
}
