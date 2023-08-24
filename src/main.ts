import "reflect-metadata";
import { reflect } from "typescript-rtti";
import { IfaceFromModule } from "./module";

interface Iface {
    name: string
}

const iface = reflect<IfaceFromModule>().as("interface").reflectedInterface;
console.log(iface.propertyNames);
