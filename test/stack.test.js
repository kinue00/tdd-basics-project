class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    if (this.top === -1) {
      return null; // or throw an error if you prefer
    }
    const poppedItem = this.items[this.top];
    delete this.items[this.top];
    this.top -= 1;
    return poppedItem;
  }
}

describe('My Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push to the top', () => {
    stack.push('🥑');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🥑');

    stack.push('🌽');
    expect(stack.top).toBe(1);
    expect(stack.peek).toBe('🌽');
  });

  // it.todo('can pop off');
  it('can pop off', () => {
    stack.push('🥑');
    stack.push('🌽');
    stack.pop();
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🥑');
  })
  
  /*
  it('can pop off', () => {
    stack.push('🥑');
    stack.push('🌽');
    stack.push('🍕');

    expect(stack.top).toBe(2);
    expect(stack.peek).toBe('🍕');

    const poppedItem = stack.pop();
    expect(poppedItem).toBe('🍕');
    expect(stack.top).toBe(1);
    expect(stack.peek).toBe('🌽');

    const anotherPoppedItem = stack.pop();
    expect(anotherPoppedItem).toBe('🌽');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🥑');

    const lastPoppedItem = stack.pop();
    expect(lastPoppedItem).toBe('🥑');
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
  */
});
