import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const token = localStorage.getItem('jwtToken');
  const router = inject(Router);
  if (token) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};
