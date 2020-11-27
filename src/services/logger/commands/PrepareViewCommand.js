// This file is part of leanes-simple.
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// Software distributed under the License is distributed on an "AS IS" basis,
// WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for
// the specific language governing rights and limitations under the License.

import type { NotificationInterface } from '../../../interfaces/NotificationInterface';
import type { ApplicationInterface } from '../../../interfaces/ApplicationInterface';

export default (Module) => {
  const {
    APPLICATION_MEDIATOR, LOGGER,
    Command, ApplicationMediator,
    initialize, partOf, meta, method, nameBy
  } = Module.NS;

  @initialize
  @partOf(Module)
  class PrepareViewCommand extends Command {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method execute<T = ?any>(note: NotificationInterface<T>): void {
      const app: ApplicationInterface = note.getBody();
      const appMediator = ApplicationMediator.new();
      appMediator.setName(APPLICATION_MEDIATOR);
      appMediator.setViewComponent(app);
      this.facade.registerMediator(appMediator);
      // this.facade.addMediator(APPLICATION_MEDIATOR, 'ApplicationMediator', app);
      // this.facade.activateMediator(APPLICATION_MEDIATOR);

      this.facade.addMediator(LOGGER, 'LoggerJunctionMediator');
      this.facade.activateMediator(LOGGER);
    }
  }
}