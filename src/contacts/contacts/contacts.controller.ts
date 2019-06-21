import { Controller, Get, Post, Put, Delete, Body, Param, Req } from '@nestjs/common';
import { Contact } from '../contact.entity';
import { ContactsService } from '../contacts.service';

@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService) { }

    @Get()
    getAllContacts(): Promise<Contact[]> {
        return this.contactsService.findAll();
    }

    @Get('/:id')
    getContact(@Param('id') id: number): Promise<Contact> {
        return this.contactsService.find(id);
    }

    @Post('create')
    createContact(@Body() contactData: Contact): Promise<any> {
        return this.contactsService.create(contactData);
    }

    @Put('update/:id')
    updateContact(@Param('id') id: number, @Body() contactData: Contact): Promise<any> {
        contactData.id = id;
        return this.contactsService.update(contactData);
    }

    @Delete('delete/:id')
    deleteContact(@Param('id') id: number): Promise<any> {
        return this.contactsService.delete(id);
    }


}
