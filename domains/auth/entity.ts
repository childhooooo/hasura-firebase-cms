export type GenerateAdminOptions = {
  id: string;
};

export class Admin {
  constructor(public readonly id: string) {}

  static generate({ id }: GenerateAdminOptions): Admin {
    return new Admin(id);
  }
}
