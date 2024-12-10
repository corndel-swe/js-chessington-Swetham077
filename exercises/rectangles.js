export class Rectangle {
  #width
  #height

  constructor(width, height) {
    this.#width = width
    this.#height = height
  }

  area() {
    return this.#width * this.#height
  }

  perimeter() {
    return 2 * (this.#width + this.#height)
  }

  width() {
    return this.#width
  }

  height() {
    return this.#height
  }
}

export class Square extends Rectangle {
  #side

  constructor(side) {
    super(side, side);
  }

  area() {
    return this.#side * this.#side
  }

  perimeter() {
    return 4 * this.#side
  }

  width() {
    return this.#side
  }

  height() {
    return this.#side
  }
}
