

const validateUnionType = ( value: any, allowedTypes: string[] ): boolean => {
  const typeValue = typeof ( value );
  console.log(typeValue);  
  return allowedTypes.includes( typeValue );
};

let allowedTypes:string[] = ['string','number','boolean','object']
console.log(validateUnionType(3,allowedTypes))
allowedTypes = ['string','boolean','object']
console.log(validateUnionType(3,allowedTypes))
allowedTypes = ['string','number','boolean','object']
console.log( validateUnionType( {name:'ddd', age:34},allowedTypes))
allowedTypes = ['string','number','boolean']
console.log(validateUnionType({name:'ddd', age:34},allowedTypes))
allowedTypes = ['string','number','boolean','object']
console.log(validateUnionType(true,allowedTypes))
allowedTypes = ['string','number']
console.log(validateUnionType(false,allowedTypes))