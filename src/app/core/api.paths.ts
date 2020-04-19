export function apiPaths(): any {
  const basePath = 'http://193.124.114.46:3001';
  const protectedPath = '/api/protected';
  return {
    base: basePath,
    protected: protectedPath,
    user: {
      create: `${basePath}/users`,
      login: `${basePath}/sessions/create`,
      info: `${basePath}${protectedPath}/user-info`,
      list: `${basePath}${protectedPath}/users/list`
    },
    transaction: {
      create: `${basePath}${protectedPath}/transactions`,
      list: `${basePath}${protectedPath}/transactions`,
    }
  };
}
