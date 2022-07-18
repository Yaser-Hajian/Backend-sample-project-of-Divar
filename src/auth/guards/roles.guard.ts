import { Role } from "src/globals/enums/role.enum";
import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';

const RoleGuard = (role: Role): Type<CanActivate> => {
  class RoleGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext) {
      const request = context.switchToHttp().getRequest();
      const user = request.user;
      return user?.role === role;
    }
  }
  return mixin(RoleGuardMixin);
}
 
export default RoleGuard;