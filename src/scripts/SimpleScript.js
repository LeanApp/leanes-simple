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

export default (Module) => {
  const {
    SIMPLE_PROXY,
    Script,
    initialize, partOf, meta, method, nameBy
  } = Module.NS;

  @initialize
  @partOf(Module)
  class SimpleScript extends Script {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @inject(`Factory<${SIMPLE_PROXY}>`)
    @property _simpleProxyFactory: () => SimpleProxyInterface;
    @property get _simpleProxy(): SimpleProxyInterface {
      return this._simpleProxyFactory()
    }

    @method async body(data: ?any): Promise<?any> {
      console.log('SimpleScript execute()');
      await this.send(MSG_FROM_CONSOLE, '');
      this._simpleProxy.setData('... waiting new text ...');
      await this.send(MSG_TO_CONSOLE, this._simpleProxy.getData());
      return 'clearing compleated';
    }
  }
}
