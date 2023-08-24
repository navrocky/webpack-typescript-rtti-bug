import "reflect-metadata";
import { reflect } from "typescript-rtti";
import { IfaceFromModule, helloWorld } from "./module";

interface LocalIface {
  name: string;
}

helloWorld()

try {
  const localIface = reflect<LocalIface>().as("interface").reflectedInterface;
  console.log(localIface.class.name, localIface.propertyNames);

  /// if we comment out next two lines then project compiles and worked
  const ifaceFromModule = reflect<IfaceFromModule>().as("interface").reflectedInterface;
  console.log(ifaceFromModule.class.name, ifaceFromModule.propertyNames);
  /// till this line

} catch (e) {
  console.error(e);
}
