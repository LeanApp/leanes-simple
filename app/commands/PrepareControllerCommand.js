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

export default (Module) => {
  const {
    MSG_FROM_CONSOLE, CLEAR_CONSOLE,
    Command,
    initialize, partOf, meta, method, nameBy
  } = Module.NS;

  @initialize
  @partOf(Module)
  class PrepareControllerCommand extends Command {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method execute<T = ?any>(note: NotificationInterface<T>): void {
      this.facade.addCommand(MSG_FROM_CONSOLE, 'SimpleCommand');
      this.facade.addCommand(CLEAR_CONSOLE, 'SimpleScript');
    }
  }
}
