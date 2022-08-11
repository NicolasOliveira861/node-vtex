import { IOClients } from "@vtex/api";
import { Catalog, OMS } from "@vtex/clients";
import ProductAndSkus from "./catalog";
import Promotions from "./promotions";

import Status from "./status";

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
    public get status() {
        return this.getOrSet("status", Status);
    }

    public get catalog() {
        return this.getOrSet("catalog", Catalog);
    }

    public get oms() {
        return this.getOrSet("oms", OMS);
    }

    public get productAndSkus() {
        return this.getOrSet("productAndSkus", ProductAndSkus);
    }

    public get promotions() {
        return this.getOrSet("promotions", Promotions);
    }
}
