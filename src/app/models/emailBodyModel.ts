export class EmailBodyModel {
  constructor(
    public asunto: String,
    public email_receptor: String,
    public body: String
  ) {}
}
