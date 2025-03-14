import RomeoProfile from "./RomeoProfileResponse";

type RomeoResponse = {
  cursors: CursorResponse;
  items: RomeoProfile[];
  total: number;
};

type CursorResponse = {
  after: "string";
};

export default RomeoResponse;
