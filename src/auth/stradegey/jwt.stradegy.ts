import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';

  export interface CustomRequest extends Request {
    user?: any;
  }
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request : CustomRequest = context.switchToHttp().getRequest();        
        const token = this.extractTokenFromHeader(request);
        
        if (!token) {
          throw new UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(
              token,
              {
                secret: "token"
              }
            );
            request['user'] = payload;
          } catch {
            throw new UnauthorizedException();
          }
          return true;
        }
      
        private extractTokenFromHeader(request: Request): string | undefined {
          const token = request.headers.authorization;
          return  token ? token : undefined;
        }
      }
      