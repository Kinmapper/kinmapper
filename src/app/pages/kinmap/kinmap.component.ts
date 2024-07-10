import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SplitterModule } from 'primeng/splitter';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-kinmap',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    NgxEchartsDirective,
    SplitterModule,
    ToolbarModule
  ],
  templateUrl: './kinmap.component.html',
  styleUrl: './kinmap.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class KinmapComponent {
  displayIndividualAdditionDialog: boolean = false;
  displayAssociationAdditionDialog: boolean = false;

  kinmapTitle: String = '';
  options!: EChartsOption;

  constructor() { }

  ngOnInit(): void {
    this.options = {
      title: {
        text: 'Simple Graph',
      },
      tooltip: {},
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'force', // Change layout to 'force'
          symbolSize: 60,
          roam: true,
          label: {
            show: true,
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [4, 10],
          edgeLabel: {
            fontSize: 20,
          },
          data: [
            { name: 'Node 1' },
            { name: 'Node 2' },
            { name: 'Node 3' },
            { name: 'Node 4' },
            { name: 'Node 5' }
          ],
          links: [
            {
              source: 0,
              target: 1,
              symbolSize: [5, 20],
              label: {
                show: true,
              },
              lineStyle: {
                width: 5,
                curveness: 0.2,
              },
            },
            {
              source: 'Node 2',
              target: 'Node 1',
              label: {
                show: true,
              },
              lineStyle: {
                curveness: 0.2,
              },
            },
            {
              source: 'Node 1',
              target: 'Node 3',
            },
            {
              source: 'Node 2',
              target: 'Node 3',
            },
            {
              source: 'Node 2',
              target: 'Node 4',
            },
            {
              source: 'Node 1',
              target: 'Node 4',
            },
            {
              source: 'Node 1',
              target: 'Node 5',
            }
          ],
          lineStyle: {
            opacity: 0.9,
            width: 2,
            curveness: 0,
          },
          force: {
            repulsion: 1000, // Adjust this value to control the distance between nodes
          },
        },
      ],
    };
  }
}