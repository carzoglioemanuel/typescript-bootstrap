import HttpException from "./Http.exception";

class NotFoundException extends HttpException {
  constructor() {
    super(404, "Not found");
  }
}

export default NotFoundException;
