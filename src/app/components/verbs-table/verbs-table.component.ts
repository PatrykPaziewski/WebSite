import { ViewChild, Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource, MatSort, MatSortable } from '@angular/material';
import { DoubleRowPaginatorComponent } from '../double-row-paginator/double-row-paginator.component';
import { VerbService } from 'src/app/shared/verb.service';

@Component({
    selector: 'app-verbs-table',
    templateUrl: './verbs-table.component.html',
    styleUrls: ['./verbs-table.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
            state('expanded', style({ height: '*', visibility: 'visible' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class VerbsTableComponent {
    displayedColumns = ['id', 'verb', 'translation'];
    headElements = ['Yo', 'Tú', 'él, Ella, Usted', 'Nosotros', 'Vosotros', 'Ellos, Ellas, Ustedes']
    dataSource: MatTableDataSource<any>;
    elementData: Element[];
    tempElementData: any;
    objectKeys = Object.keys;
    Verbs;
    data: Element[];
    isExpansionDetailRow = (i: number, row: Object) => {
        return row.hasOwnProperty('detailRow');
    }
    expandedElement: any;
    searchKey: any;

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(DoubleRowPaginatorComponent, { static: true }) customPaginator: DoubleRowPaginatorComponent;

    constructor(public service: VerbService) { }

    ngOnInit() {
        this.service.GetAll().subscribe(
            res => {
                var list = Object.values(res);
                let array = list.map(verb => {
                    return {
                        id: list.indexOf(verb) + 1,
                        verb: verb.name,
                        translation: verb.translation,
                        Yo: verb.indicativoPresenteP1,
                        Tú: verb.indicativoPresenteP2,
                        élEllaUsted: verb.indicativoPresenteP3,
                        nosotros: verb.indicativoPresenteM1,
                        vosotros: verb.indicativoPresenteM2,
                        ellosEllasUstedes: verb.indicativoPresenteM3
                    };
                });
                this.dataSource = new MatTableDataSource(array);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.customPaginator;
            },
            err => {
                console.log(err)
            }
        );
    }

    onSearchClear() {
        this.searchKey = "";
        this.applyFilter();

    }
    applyFilter() {
        this.dataSource.filter = this.searchKey.trim().toLowerCase();
    }

    getRows(data: Element[]) {
        const rows = [];
        data.forEach(element => rows.push(element, { detailRow: true, element }));
        console.log(data)

        return rows;
    }

    toggleRow(value: Element) {
        const foundElement = this.dataSource.data.find(elem => elem.element !== undefined && elem.element.verb === value.verb)

        const index = this.dataSource.data.indexOf(foundElement);
        this.dataSource.data[index].element.show = !this.dataSource.data[index].element.show;
    }

    onKeydown(event) {
        this.onSearchClear()
    }
}

export interface Element {
    id: number;
    verb: string;
    translation: string;
    Yo: string;
    Tú: string;
    élEllaUsted: string;
    nosotros: string;
    vosotros: string;
    ellosEllasUstedes: string;
}





