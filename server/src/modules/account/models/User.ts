import { v4 as uuidV4 } from "uuid";

class User {
    id?: string;
    email: string;
    username: string;
    name: string;
    phone: string;
    photo_url?: string;
    created_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { User };
