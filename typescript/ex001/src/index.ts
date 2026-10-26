type Customer = {
  birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(10)
console.log(customer?.birthday?.getFullYear())

let log: any = (message: string) => {
    console.log(message)
}

log("Angola")
