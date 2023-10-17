/* window.js
 *
 * Copyright 2023 Sendy Aditya Suryana
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';

export const CalclistWindow = GObject.registerClass({
    GTypeName: 'CalclistWindow',
    Template: 'resource:///com/sendyyeah/Calclist/window.ui',
    InternalChildren: [
      'list_item',
      'item_name',
      'item_operator',
      'item_amount',
      'total_amount',
      'btn_7',
      'btn_8',
      'btn_9',
      'btn_4',
      'btn_5',
      'btn_6',
      'btn_1',
      'btn_2',
      'btn_3',
      'btn_0',
      'btn_divide',
      'btn_del',
      'btn_decimal',
      'btn_multiply',
      'btn_clear',
      'btn_percent',
      'btn_min',
      'btn_equal',
      'btn_plus'
    ],
}, class CalclistWindow extends Gtk.ApplicationWindow {
    constructor(application) {
        super({ application });

        const itemContainer = new Gtk.Box({
          orientation: Gtk.Orientation.HORIZONTAL,
          spacing: 4
        });

        const entryName = new Gtk.Entry();
        entryName.set_hexpand(true);
        const entryOperator = new Gtk.Entry();
        entryOperator.set_max_length(1)
        entryOperator.set_max_width_chars(1)
        const entryAmount = new Gtk.Entry();
        entryAmount.set_input_purpose(Gtk.InputPurpose.NUMBER);
        entryAmount.set_halign(1)

        this._btn_7.connect("clicked", () => {
          this._item_amount.set_text(this._item_amount.get_text() + "7");
        })

        this._btn_plus.connect("clicked", () => {
          log("Add Item with Plus Operator");
          entryOperator.set_text("+")
          itemContainer.append(entryName);
          itemContainer.append(entryOperator);
          itemContainer.append(entryAmount);
          this._list_item.insert(itemContainer, -1);
        })
    }
});

