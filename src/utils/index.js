import {
  EXPRESSION_REGEX,
  OPERATOR_PATTERN,
  VALID_PATTERN
} from '../constants';

export const validateEquation = equation => {
  return EXPRESSION_REGEX.test(equation);
};

function evaluateExpression(equation, variableName, value) {
  const sanitizedEquation = equation.replace(/\^/g, '**');

  if (!VALID_PATTERN.test(sanitizedEquation)) return false;
  if (OPERATOR_PATTERN.test(sanitizedEquation.trim())) return false;

  if (!validateEquation(sanitizedEquation)) {
    return null;
  }

  try {
    const func = new Function(variableName, `return ${sanitizedEquation}`);
    return func(value);
  } catch (error) {
    return null;
  }
}

export const evaluateWorkflow = (config, input) => {
  return config.reduce((acc, curr) => {
    if (curr.equation) {
      acc = evaluateExpression(curr.equation, 'x', acc);
    }
    return acc;
  }, input);
};
