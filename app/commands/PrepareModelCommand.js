// This file is part of leanes-simple.
//
// leanes-simple is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-simple is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with leanes-simple.  If not, see <https://www.gnu.org/licenses/>.

import type { NotificationInterface } from '../interfaces/NotificationInterface';
import type { ApplicationInterface } from '../interfaces/ApplicationInterface';

export default (Module) => {
  const {
    APPLICATION_PROXY, SIMPLE_PROXY,
    Command,
    initialize, partOf, meta, method, nameBy
  } = Module.NS;

  @initialize
  @partOf(Module)
  class PrepareModelCommand extends Command {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method execute<T = ?any>(note: NotificationInterface<T>): void {
      const app: ApplicationInterface = note.getBody();
      this.facade.addProxy(APPLICATION_PROXY, 'ApplicationProxy', app.initialState);
      this.facade.addAdapter('SimpleAdapter');
      this.facade.addProxy(SIMPLE_PROXY, 'SimpleProxy');
    }
  }
}
