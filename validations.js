/**
 * Return false if there are at least one case successfull, otherwise returns true.
 * @param {boolean[]} requests 
 * @returns {boolean}
 */
export const validateAllRequestsFailed = (requests) => {
  for (let index = 0; index < requests.length; index++)
    if (requests[index] === true) return false;
  return true;
};
