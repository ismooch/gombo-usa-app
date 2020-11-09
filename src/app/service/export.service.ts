import { Injectable } from '@angular/core';
import { Packer, Document, Paragraph, HeadingLevel, TextRun, SymbolRun } from "docx";
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  eventFileName = 'events.docx';
  calendarReportFileName = 'calendar-report.docx';

  constructor() { }

  exportToWord (jsonData: any[], fileType = "EVENT"): void {
    
    var exportTo: String;
    if(fileType == "EVENT") {
      exportTo  = this.eventFileName; 
    } else if(fileType == "CALENDAR_REPORT") {
      exportTo = this.calendarReportFileName;
    } else {
      exportTo = 'unknown-file.docx'
    }
    const document = new Document();
    document.addSection({ children: this.generateContent(jsonData)});

    Packer.toBlob(document).then(buffer => {
      FileSaver.saveAs(buffer, exportTo);
    });
   
  }


  public generateContent(data): Paragraph[]  { 

    let content: Array<Paragraph> = [];
    let dates = Object.keys(data); 
    let dayAsString, monthAsString: String;
    let day: Number;
    
    for (let date of dates) {

      let dateConvert = new Date(date);
      dayAsString = dateConvert.toLocaleDateString('en-US', { weekday: 'long' });
      monthAsString = dateConvert.toLocaleDateString('en-US', { month: 'long' });;
      day = dateConvert.getDate();

      let firstLine = new Paragraph({
        text: dayAsString + "," + monthAsString + " " + day,
        heading: HeadingLevel.HEADING_2
      });
      content.push(firstLine);

      for(let item of data[date]) {

        let secondLine = new Paragraph(item.city + " " + item.location + " " + item.event_name);
        content.push(secondLine);
        
        let tempThirdContent = item.event_time + " " + item.contact + " ";
        if(item.contact_phone) {
          tempThirdContent += "tel:" + item.contact_phone;
        }
        let thirdLine = new Paragraph(tempThirdContent);
        content.push(thirdLine);
        
        let lastLine = new Paragraph({text: item.description, spacing: { after: 300}});
        content.push(lastLine);
        
      }
      
    } 
    return content;
  }

  
  
   
}

