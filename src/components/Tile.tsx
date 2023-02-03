import * as React from 'react';

export const Tile: React.FC<any> = () => {
  return (
    <div class="card-deck mb-3 text-center">
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">TF tile</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">
            243 <small class="text-muted">users registered</small>
          </h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>
              <strong>152</strong> users active now
            </li>
            <li>
              <strong>12</strong> admins registered with tenant
            </li>
          </ul>
          <button
            type="button"
            class="btn btn-lg btn-block btn-outline-primary"
          >
            Manage users
          </button>
        </div>
      </div>
    </div>
  );
};
