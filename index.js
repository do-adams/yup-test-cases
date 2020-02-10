const yup = require('yup');

function run(title, ctx, fn, ...arguments) {
    const result = fn.call(ctx, ...arguments);
    console.log(title, result);
    return result;
};

function checkStringValidity(title, schema) {
    run(`${title}: Truthy String`, schema, schema.isValidSync, 'string');
    run(`${title}: Falsy String`, schema, schema.isValidSync, '');
    run(`${title}: Null`, schema, schema.isValidSync, null);
    run(`${title}: Undefined`, schema, schema.isValidSync, undefined);
}

const defaultSchema = yup.string();
checkStringValidity('Default Schema', defaultSchema);

// Default schema property validation method
const notRequiredSchema = yup.string().notRequired();
checkStringValidity('Not Required Schema', notRequiredSchema);

// Most strict schema property validation method
const requiredSchema = yup.string().required();
checkStringValidity('Required Schema', requiredSchema);

// Most relaxed schema property validation method
const nullableSchema = yup.string().nullable();
checkStringValidity('Nullable Schema', nullableSchema);
