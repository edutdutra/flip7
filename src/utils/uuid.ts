import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export class UUIDUtils {
  static generate(): string {
    return uuidv4();
  }
}
